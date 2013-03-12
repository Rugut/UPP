Ext.define('Меню.ОтчетыФормыОтчета',
    {
        extend: 'MyDesktop.BogusModule',
        init: function () {
            this.launcher =
            {
                text: 'Отчеты',
                iconCls: 'bogus',
                handler: function () {
                    return false;
                },
                menu: {
                    items: []
                }
            };
            //alert(src.FormId);
            var Отчеты = Ext.create("Метаданные.Отчеты");
            for (var НомерОтчета = 0, Отчет; Отчет = Отчеты[НомерОтчета]; НомерОтчета++) {
                if (Отчет.ОсновнаяФормаОбъекта == '00000000-0000-0000-0000-000000000000') {
                    continue;
                }
                this.launcher.menu.items.push
                (
                    {
                        text: Отчет.Имя,
                        iconCls: 'bogus',
                        handler: this.createWindow,
                        scope: this,
                        windowId: ++windowIndex,
                        FormId: 'Отчеты.' + Отчет.Имя + '.Форма',
                    }
                );
                if (НомерОтчета > 20) {
                    break;
                }
            }
        }
    }
);