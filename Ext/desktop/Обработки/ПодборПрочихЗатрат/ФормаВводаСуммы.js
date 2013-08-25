Ext.require(['Данные.Обработки.ПодборПрочихЗатрат'], function () 
{
	Ext.define('Обработки.ПодборПрочихЗатрат.ФормаВводаСуммы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:241px;height:87px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Обработка  Подбор прочих затрат',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьСуммаУпр',
			text: 'Сумма (упр.):',
			style: 'position:absolute;left:8px;top:8px;width:80px;height:21px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаУпр',
			style: 'position:absolute;left:88px;top:8px;width:88px;height:21px;',
			width: 88,
			height: 21,
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаУпр',
			text: 'НадписьВалютаУпр',
			style: 'position:absolute;left:181px;top:8px;width:52px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСуммаРегл',
			text: 'Сумма (регл.):',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:21px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СуммаРегл',
			style: 'position:absolute;left:88px;top:33px;width:88px;height:21px;',
			width: 88,
			height: 21,
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаРегл',
			text: 'НадписьВалютаРегл',
			style: 'position:absolute;left:180px;top:33px;width:52px;height:21px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:62px;width:241px;height:25px;',
			width: 241,
			height: 25,
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
		],
	}],
	dockedItems:
	[
	]
	});
});