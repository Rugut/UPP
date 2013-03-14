Ext.define('Меню.СправочникиФормыЭлемента',
    {
        extend: 'MyDesktop.BogusModule',
        init: function ()
        {
            this.launcher =
            {
                text: 'Справочники',
                iconCls: 'bogus',
                handler: function () {
                    return false;
                },
                menu: {
                    items: []
                }
            };
            //alert(src.FormId);
            var Справочники = Ext.create("Метаданные.Справочники");
            for (var НомерСправочника = 0, Справочник; Справочник = Справочники[НомерСправочника]; НомерСправочника++)
            {
                if (Справочник.ОсновнаяФормаОбъекта == '00000000-0000-0000-0000-000000000000')
                {
                    continue;
                }
                this.launcher.menu.items.push
                (
                    {
                        text: Справочник.Имя,
                        iconCls: 'bogus',
                        handler: this.createWindow,
                        scope: this,
                        windowId: ++windowIndex,
                        FormId: 'Справочники.' + Справочник.Имя + '.ФормаЭлемента',
                    }
                );
                if (НомерСправочника > 50)
                {
                    break;
                }
            }
        }
    }
);