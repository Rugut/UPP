
Ext.define('Меню.ОтчетыФормыОтчета',
    {
        requires: ['Метаданные.Отчеты'],
        extend: 'MyDesktop.BogusModule',
        init: function ()
        {
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
            var Отчеты = Ext.create("Метаданные.Отчеты");
            for (var Номер = 0, Элемент; Элемент = Отчеты[Номер]; Номер++)
            {
                if (Элемент.ОсновнаяФормаОбъекта == '00000000-0000-0000-0000-000000000000')
                {
                        continue;
                }
                this.launcher.menu.items.push
                (
                    {
                        text: Элемент.Имя,
                        iconCls: 'bogus',
                        handler: this.createWindow,
                        scope: this,
                        windowId: ++windowIndex,
                        FormId: 'Отчеты.' + Элемент.Имя + '.Форма',
                    }
                );
                if (Номер > 50)
                {
                    break;
                }
            }
        }
    }
);