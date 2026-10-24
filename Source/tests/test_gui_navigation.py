from types import SimpleNamespace

import pygame

from gui_gl import GUI


def make_gui():
    gui = GUI.__new__(GUI)
    gui.overlay = "home"
    gui._home_buttons = {
        "play": pygame.Rect(10, 10, 80, 30),
        "levels": pygame.Rect(10, 50, 80, 30),
        "guide": pygame.Rect(10, 90, 80, 30),
        "music": pygame.Rect(10, 130, 80, 30),
    }
    gui._chapter_hits = []
    gui._level_hits = []
    gui._overlay_back = None
    gui.selected_group = None
    gui.stage_idx = 0
    gui.stages = [object(), object()]
    gui.restart = lambda: None
    gui._palette_open = False
    return gui


def test_home_chapter_button_opens_chapter_browser():
    gui = make_gui()

    gui._handle_click((20, 60))

    assert gui.overlay == "chapters"
    assert gui.stage_idx == 0


def test_home_guide_button_opens_guide_without_starting_stage():
    gui = make_gui()

    gui._handle_click((20, 100))

    assert gui.overlay == "help"
    assert gui.stage_idx == 0


def test_guide_ignores_clicks_outside_back_button():
    gui = make_gui()
    gui.overlay = "help"
    gui._overlay_back = (pygame.Rect(100, 100, 80, 30), "home")

    gui._handle_click((10, 10))

    assert gui.overlay == "help"
    gui._handle_click((110, 110))
    assert gui.overlay == "home"


def test_chapter_click_selects_group_without_starting_stage():
    gui = make_gui()
    gui.overlay = "chapters"
    gui._chapter_hits = [(pygame.Rect(100, 100, 120, 80), "A - Basic")]

    gui._handle_click((110, 110))

    assert gui.overlay == "levels"
    assert gui.selected_group == "A - Basic"
    assert gui.stage_idx == 0


def test_levels_back_returns_to_chapters_without_starting_stage():
    gui = make_gui()
    gui.overlay = "levels"
    gui._overlay_back = (pygame.Rect(100, 100, 80, 30), "chapters")

    gui._handle_click((110, 110))

    assert gui.overlay == "chapters"
    assert gui.stage_idx == 0


def test_home_button_returns_from_game_without_changing_stage():
    gui = make_gui()
    gui.overlay = None
    home = SimpleNamespace(text="Home", rect=pygame.Rect(200, 10, 80, 30))
    gui._buttons = lambda: ([home], [])
    gui._show_home = lambda: setattr(gui, "overlay", "home")

    gui._handle_click(home.rect.center)

    assert gui.overlay == "home"
    assert gui.stage_idx == 0


def test_home_music_button_toggles_background_music():
    gui = make_gui()
    gui.music_enabled = True
    gui._audio_error = None
    gui._music_channel = SimpleNamespace(pause=lambda: None, unpause=lambda: None)
    gui._toggle_music = lambda: setattr(gui, "music_enabled", not gui.music_enabled)

    gui._handle_click((20, 140))

    assert gui.music_enabled is False


def test_board_button_opens_palette_and_color_choice_closes_it():
    gui = make_gui()
    gui.overlay = None
    board = SimpleNamespace(text="Board", rect=pygame.Rect(10, 10, 80, 30))
    gui._buttons = lambda: ([board], [])
    gui.board_palette_idx = 0

    gui._handle_click(board.rect.center)

    assert gui._palette_open is True
    gui._palette_buttons = [(pygame.Rect(100, 100, 80, 40), 2)]
    gui._handle_click((110, 110))

    assert gui.board_palette_idx == 2
    assert gui._palette_open is False


def test_palette_clicks_inside_game_view_are_routed_to_ui():
    gui = make_gui()
    gui.overlay = None
    gui._palette_open = True
    gui.view = pygame.Rect(0, 0, 948, 728)
    palette_option = pygame.Rect(354, 378, 132, 90)

    assert gui._in_view(palette_option.center)
    assert gui._click_is_ui(palette_option.center)


def test_game_sound_button_toggles_background_music():
    gui = make_gui()
    gui.overlay = None
    sound = SimpleNamespace(text="Sound", rect=pygame.Rect(10, 10, 80, 30))
    gui._buttons = lambda: ([sound], [])
    gui._toggle_music = lambda: setattr(gui, "music_enabled", not gui.music_enabled)
    gui.music_enabled = True

    gui._handle_click(sound.rect.center)

    assert gui.music_enabled is False
