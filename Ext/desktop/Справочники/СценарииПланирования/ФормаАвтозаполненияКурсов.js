Ext.require(['Данные.Справочники.СценарииПланирования'], function () 
{
	Ext.define('Справочники.СценарииПланирования.ФормаАвтозаполненияКурсов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:348px;height:180px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: '',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КоличествоПериодовРаспределения',
			style: 'position:absolute;left:240px;top:32px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Количество периодов для установки курсов:',
			style: 'position:absolute;left:8px;top:32px;width:230px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаУстановкиКурсов',
			width: 100,
			height: 19,
			style: 'position:absolute;left:240px;top:8px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Начальная дата установки курсов:',
			style: 'position:absolute;left:8px;top:8px;width:230px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ИсходныйКурс',
			style: 'position:absolute;left:240px;top:104px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Исходный курс для заполнения:',
			style: 'position:absolute;left:8px;top:104px;width:230px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПриращениеЗаПериод',
			style: 'position:absolute;left:240px;top:128px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Приращение за период',
			style: 'position:absolute;left:8px;top:128px;width:230px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'КратностьНаИнтервал',
			style: 'position:absolute;left:240px;top:56px;width:100px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Кратность на интервал заполнения:',
			style: 'position:absolute;left:8px;top:56px;width:230px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СпособЗаполнения.Представление',
			width: 100,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:240px;top:80px;width:100px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.СценарииПланирования.ФормаАвтозаполненияКурсовСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СценарииПланирования.ФормаАвтозаполненияКурсовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.СценарииПланирования.ФормаАвтозаполненияКурсовСобытия'], function ()
					{
						var объект = Ext.create("Справочники.СценарииПланирования.ФормаАвтозаполненияКурсовСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Вид изменения курсов при заполнении:',
			style: 'position:absolute;left:8px;top:80px;width:230px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:155px;width:348px;height:25px;',
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
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});