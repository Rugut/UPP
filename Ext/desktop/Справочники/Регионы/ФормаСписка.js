Ext.define('Справочники.Регионы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 582,
	iconCls: 'bogus',
	title: 'Справочник Регионы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:566px;height:280px;',
			height: 280,width: 566,
			columns:
			[
				{
					text:'Код',
				},
				{
					text:'КодРегиона',
				},
				{
					text:'Наименование',
				},
				{
					text:'Комментарий',
				},
				{
					text:'КодАдресногоЭлемента',
				},
				{
					text:'ЖДСтанцияНазначения',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:582px;height:25px;',
			items:
			[
				{
					text:'Разделитель5',
				},
				{
					text:'Добавить',
				},
			]
		},
	]
});