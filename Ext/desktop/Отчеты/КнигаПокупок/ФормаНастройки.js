Ext.require(['Данные.Отчеты.КнигаПокупок'], function () 
{
	Ext.define('Отчеты.КнигаПокупок.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:599px;height:168px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
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
			style: 'position:absolute;left:32px;top:116px;width:183px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отбирать по контрагенту:',
			style: 'position:absolute;left:32px;top:92px;width:149px;height:19px;',
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
			style: 'position:absolute;left:183px;top:92px;width:230px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.КнигаПокупок.ФормаНастройкиСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КнигаПокупок.ФормаНастройкиСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.КнигаПокупок.ФормаНастройкиСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.КнигаПокупок.ФормаНастройкиСобытия");
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
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Формировать отчет в соответствии с правилами ведения книги покупок',
			style: 'position:absolute;left:8px;top:44px;width:405px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Использовать дополнительные настройки',
			style: 'position:absolute;left:8px;top:68px;width:405px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:143px;width:599px;height:25px;',
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