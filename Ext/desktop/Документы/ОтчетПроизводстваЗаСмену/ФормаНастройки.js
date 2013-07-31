Ext.require(['Данные.Документы.ОтчетПроизводстваЗаСмену'], function () 
{
	Ext.define('Документы.ОтчетПроизводстваЗаСмену.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:434px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка документа',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически распределять возвратные отходы на продукцию',
			style: 'position:absolute;left:8px;top:226px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически распределять материалы',
			style: 'position:absolute;left:8px;top:46px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически распределять прочие затраты',
			style: 'position:absolute;left:8px;top:166px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически распределять тех. операции',
			style: 'position:absolute;left:8px;top:106px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать материалы',
			style: 'position:absolute;left:8px;top:26px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать технологические операции',
			style: 'position:absolute;left:8px;top:86px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать прочие затраты',
			style: 'position:absolute;left:8px;top:146px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать возвратные отходы',
			style: 'position:absolute;left:8px;top:206px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать наработку',
			style: 'position:absolute;left:8px;top:266px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать задания на производство',
			style: 'position:absolute;left:8px;top:286px;width:384px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Материалы',
			style: 'position:absolute;left:8px;top:6px;width:384px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Технологические операции',
			style: 'position:absolute;left:8px;top:66px;width:384px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Прочие затраты',
			style: 'position:absolute;left:8px;top:126px;width:384px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Возвратные отходы',
			style: 'position:absolute;left:8px;top:186px;width:384px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать заказы на обслуживание ОС',
			style: 'position:absolute;left:8px;top:326px;width:384px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Другие настройки',
			style: 'position:absolute;left:8px;top:246px;width:384px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать направления выпуска',
			style: 'position:absolute;left:8px;top:346px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать заказы',
			style: 'position:absolute;left:8px;top:306px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать подразделения НЗП',
			style: 'position:absolute;left:8px;top:366px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать аналитику НЗП',
			style: 'position:absolute;left:8px;top:386px;width:384px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:409px;width:400px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
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