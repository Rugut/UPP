Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаЛьготныхДанных',
	{
	extend: 'Ext.window.Window',
	height: 139,width: 596,
	iconCls: 'bogus',
	title: 'Начисление по больничному листу',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:114px;width:596px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие6',
				},
				{
					text:'ДействиеОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:580px;height:98px;',
			height: 98,width: 580,
			items:
			[
				{
					title:'СтраницаОтставников',
				},
				{
					title:'СтраницаОблученных',
				},
			]
		},
	]
});