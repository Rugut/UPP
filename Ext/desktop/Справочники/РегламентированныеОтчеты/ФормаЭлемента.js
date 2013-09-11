Ext.require(['Данные.Справочники.РегламентированныеОтчеты'], function () 
{
	Ext.define('Справочники.РегламентированныеОтчеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:470px;height:534px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Параметры отчета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:35px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 368,
			height: 19,
			style: 'position:absolute;left:94px;top:35px;width:368px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:8px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИсточникОтчета',
			width: 367,
			height: 19,
			style: 'position:absolute;left:95px;top:98px;width:367px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-search-trigger',
			name: 'Родитель.Представление',
			width: 368,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:94px;top:8px;width:368px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.РегламентированныеОтчеты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.РегламентированныеОтчеты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.РегламентированныеОтчеты.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.РегламентированныеОтчеты.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Использовать:',
			style: 'position:absolute;left:8px;top:74px;width:84px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИсточникОтчетаФайл',
			width: 368,
			height: 19,
			style: 'position:absolute;left:94px;top:125px;width:368px;height:19px;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:67px;width:454px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:199px;width:454px;height:300px;',
			height: 300,width: 454,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Описание',
			style: 'position:absolute;left:0px;top:32px;width:454px;height:268px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОписание',
			text: 'Описание:',
			style: 'position:absolute;left:0px;top:12px;width:84px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:0px;top:0px;width:454px;height:3px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:152px;width:454px;height:41px;',
			height: 41,width: 454,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Версия внешнего отчета:',
			style: 'position:absolute;left:85px;top:0px;width:133px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыгрузить',
			text: 'Выгрузить внешний отчет в файл',
			style: 'position:absolute;left:84px;top:21px;width:175px;height:15px;',
		},
					]
				},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'файл',
			style: 'position:absolute;left:8px;top:128px;width:84px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'объект',
			style: 'position:absolute;left:8px;top:101px;width:84px;height:15px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:509px;width:470px;height:25px;',
			width: 470,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'Записать объект и закрыть форму',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать объект',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});