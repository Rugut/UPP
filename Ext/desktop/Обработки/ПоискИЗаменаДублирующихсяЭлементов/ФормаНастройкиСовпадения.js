Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.ФормаНастройкиСовпадения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:339px;height:165px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка обработки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:140px;width:339px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
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
			style: 'position:absolute;left:174px;top:72px;width:157px;height:30px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Выполнять в транзакции',
			style: 'position:absolute;left:8px;top:11px;width:323px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отключать контроль записи',
			style: 'position:absolute;left:8px;top:31px;width:323px;height:15px;',
		},
	]
});