Ext.require(['Данные.Обработки.ПомощникПланирования'], function () 
{
	Ext.define('Обработки.ПомощникПланирования.ФормаРежимСложенияОбъединения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:251px;height:246px;',
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
			xtype: 'combobox',
			style: 'position:absolute;left:13px;top:29px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'заказов',
			style: 'position:absolute;left:13px;top:74px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'подразделений',
			style: 'position:absolute;left:13px;top:98px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'проектов',
			style: 'position:absolute;left:13px;top:122px;width:230px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Режим преобразования источников:',
			style: 'position:absolute;left:8px;top:8px;width:235px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Выполнять преобразование с учетом:',
			style: 'position:absolute;left:8px;top:53px;width:235px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'контрагентов',
			style: 'position:absolute;left:13px;top:146px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'договоров',
			style: 'position:absolute;left:13px;top:170px;width:230px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'периодов',
			style: 'position:absolute;left:13px;top:194px;width:230px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:221px;width:251px;height:25px;',
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