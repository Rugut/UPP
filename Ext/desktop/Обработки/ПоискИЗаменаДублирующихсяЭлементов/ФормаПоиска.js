Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.ФормаПоиска',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:675px;height:182px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Поиск дублирующихся элементов справочников',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:157px;width:675px;height:25px;',
			items:
			[
				{
					text:'Да',
				},
				'-',
				{
					text:'Нет',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:659px;height:119px;',
			height: 119,width: 659,
			columns:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьСообщение',
			text: '',
			style: 'position:absolute;left:8px;top:2px;width:659px;height:28px;',
		},
	]
});