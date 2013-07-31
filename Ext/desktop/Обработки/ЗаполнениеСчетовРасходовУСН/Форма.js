Ext.require(['Данные.Обработки.ЗаполнениеСчетовРасходовУСН'], function () 
{
	Ext.define('Обработки.ЗаполнениеСчетовРасходовУСН.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:226px;height:149px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'Дата:',
			style: 'position:absolute;left:15px;top:48px;width:69px;height:15px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 114,
			height: 19,
			style: 'position:absolute;left:91px;top:47px;width:114px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:16px;top:78px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 114,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:91px;top:78px;width:114px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.ЗаполнениеСчетовРасходовУСН.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗаполнениеСчетовРасходовУСН.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.ЗаполнениеСчетовРасходовУСН.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Обработки.ЗаполнениеСчетовРасходовУСН.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:226px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:124px;width:226px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
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