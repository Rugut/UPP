Ext.require(['Данные.Обработки.РегистрацияИзмененийДляОбмена'], function () 
{
	Ext.define('Обработки.РегистрацияИзмененийДляОбмена.ФормаВыбораОбъектовДляРегистрации',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:413px;height:81px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Регистрация изменений для обмена',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьСписокОбъектовДляРегистрации',
			text: 'Список объектов для регистрации:',
			style: 'position:absolute;left:8px;top:6px;width:182px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СписокРедактирования.Представление',
			width: 209,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:196px;top:6px;width:209px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.РегистрацияИзмененийДляОбмена.ФормаВыбораОбъектовДляРегистрацииСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РегистрацияИзмененийДляОбмена.ФормаВыбораОбъектовДляРегистрацииСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.РегистрацияИзмененийДляОбмена.ФормаВыбораОбъектовДляРегистрацииСобытия'], function ()
					{
						var объект = Ext.create("Обработки.РегистрацияИзмененийДляОбмена.ФормаВыбораОбъектовДляРегистрацииСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'button',
			name: 'ВыбратьИзЗапроса',
			text: 'Выбрать из запроса',
			style: 'position:absolute;left:195px;top:29px;width:210px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:56px;width:413px;height:25px;',
			width: 413,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});