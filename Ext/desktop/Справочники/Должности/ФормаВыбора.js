Ext.define('Справочники.Должности.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 486,
	iconCls: 'bogus',
	title: 'Должности',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:470px;height:280px;',
			height: 280,width: 470,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'Код',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:486px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});