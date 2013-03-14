Ext.define('Обработки.УниверсальныйЖурналДокументов.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:681px;height:409px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Универсальный журнал документов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:667px;height:350px;',
			height: 350,width: 667,
			columns:
			[
				{
					text:'',
					width:'25',
				},
				{
					text:'Дата',
					width:'100',
				},
				{
					text:'Номер',
					width:'100',
				},
				{
					text:'Вид документа',
					width:'141',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:681px;height:26px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтбор',
			text: '',
			style: 'position:absolute;left:8px;top:386px;width:667px;height:15px;',
		},
	]
});