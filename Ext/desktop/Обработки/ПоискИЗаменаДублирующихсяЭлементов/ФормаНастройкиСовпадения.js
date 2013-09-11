Ext.require(['Данные.Обработки.ПоискИЗаменаДублирующихсяЭлементов'], function () 
{
	Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.ФормаНастройкиСовпадения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:339px;height:165px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка обработки',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Не отличаются',
			style: 'position:absolute;left:8px;top:72px;width:83px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Значительно отличаются',
			style: 'position:absolute;left:174px;top:72px;width:157px;height:30px;text-align:right;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выполнять в транзакции',
			style: 'position:absolute;left:8px;top:11px;width:323px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Настройка степени соответствия',
			style: 'position:absolute;left:8px;top:59px;width:323px;height:13px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключать контроль записи',
			style: 'position:absolute;left:8px;top:31px;width:323px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:140px;width:339px;height:25px;',
			width: 339,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});