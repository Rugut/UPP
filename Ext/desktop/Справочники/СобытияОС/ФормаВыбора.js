Ext.define('Справочники.СобытияОС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 619,
	iconCls: 'bogus',
	title: 'Справочник События основного средства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:603px;height:280px;',
			height: 280,width: 603,
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
					text:'ВидСобытияОС',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:619px;height:25px;',
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