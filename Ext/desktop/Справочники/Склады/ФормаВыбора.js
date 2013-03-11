Ext.define('Справочники.Склады.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 780,
	iconCls: 'bogus',
	title: 'Склады (места хранения)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:598px;height:280px;',
			height: 280,width: 598,
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
					text:'ВидСклада',
				},
				{
					text:'НомерСекции',
				},
				{
					text:'ТипЦенРозничнойТорговли',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
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