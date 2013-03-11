Ext.define('Справочники.БанковскиеСчета.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 780,
	iconCls: 'bogus',
	title: 'Банковские счета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:259px;',
			height: 259,width: 764,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'ВидСчета',
				},
				{
					text:'НомерСчета',
				},
				{
					text:'ВалютаДенежныхСредств',
				},
				{
					text:'Банк',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});