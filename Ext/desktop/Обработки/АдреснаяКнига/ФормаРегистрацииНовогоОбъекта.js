Ext.require(['Данные.Обработки.АдреснаяКнига'], function () 
{
	Ext.define('Обработки.АдреснаяКнига.ФормаРегистрацииНовогоОбъекта',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:164px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Регистрация нового объекта',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:150px;top:8px;width:258px;height:19px;',
			width: 258,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип объекта регистрации:',
			style: 'position:absolute;left:8px;top:8px;width:140px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование объекта:',
			style: 'position:absolute;left:8px;top:56px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеОбъекта',
			width: 258,
			height: 19,
			style: 'position:absolute;left:150px;top:56px;width:258px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Вид E-mail:',
			style: 'position:absolute;left:8px;top:88px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидКонтактнойИнформации',
			width: 258,
			height: 19,
			style: 'position:absolute;left:150px;top:88px;width:258px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'E-mail:',
			style: 'position:absolute;left:8px;top:112px;width:140px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЭлектроннойПочты',
			width: 258,
			height: 19,
			style: 'position:absolute;left:150px;top:112px;width:258px;height:19px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:32px;width:400px;height:24px;',
			height: 24,width: 400,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'КонтрагентВладелец.Представление',
			width: 258,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:142px;top:0px;width:258px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.АдреснаяКнига.ФормаРегистрацииНовогоОбъектаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.АдреснаяКнига.ФормаРегистрацииНовогоОбъектаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.АдреснаяКнига.ФормаРегистрацииНовогоОбъектаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.АдреснаяКнига.ФормаРегистрацииНовогоОбъектаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:139px;width:416px;height:25px;',
			width: 416,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Зарегистрировать',
				},
				'-',
				{
					text:'Зарегистрировать и открыть объект',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});