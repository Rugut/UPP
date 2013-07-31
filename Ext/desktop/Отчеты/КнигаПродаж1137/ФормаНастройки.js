Ext.require(['Данные.Отчеты.КнигаПродаж1137'], function () 
{
	Ext.define('Отчеты.КнигаПродаж1137.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:524px;height:229px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Группировать по контрагентам',
			style: 'position:absolute;left:32px;top:135px;width:183px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать по контрагенту:',
			style: 'position:absolute;left:32px;top:111px;width:149px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'КонтрагентДляОтбора.Представление',
			width: 230,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:183px;top:111px;width:230px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.КнигаПродаж1137.ФормаНастройкиСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КнигаПродаж1137.ФормаНастройкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.КнигаПродаж1137.ФормаНастройкиСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КнигаПродаж1137.ФормаНастройкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Скрыть колонки по ставке 20%',
			style: 'position:absolute;left:8px;top:6px;width:178px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выводить продавцов по счетам-фактурам на выданные авансы',
			style: 'position:absolute;left:32px;top:159px;width:381px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Руководитель.Представление',
			width: 324,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:89px;top:29px;width:324px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.КнигаПродаж1137.ФормаНастройкиСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КнигаПродаж1137.ФормаНастройкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.КнигаПродаж1137.ФормаНастройкиСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КнигаПродаж1137.ФормаНастройкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'НадписьРуководитель1',
			text: 'Руководитель:',
			style: 'position:absolute;left:8px;top:29px;width:78px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Формировать отчет в соответствии с правилами ведения книги продаж',
			style: 'position:absolute;left:8px;top:63px;width:405px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать дополнительные настройки',
			style: 'position:absolute;left:8px;top:87px;width:405px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:204px;width:524px;height:25px;',
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