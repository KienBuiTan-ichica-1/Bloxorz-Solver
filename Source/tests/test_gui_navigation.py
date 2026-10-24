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
    }
    gui._chapter_hits = []
    gui._level_hits = []
    gui._overlay_back = None
    gui.selected_group = None
    gui.stage_idx = 0
    gui.stages = [object(), object()]
    gui.restart = lambda: None
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
