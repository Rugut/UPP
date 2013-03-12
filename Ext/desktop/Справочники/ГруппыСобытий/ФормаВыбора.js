Ext.define('Справочники.ГруппыСобытий.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:500px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Группы событий',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:484px;height:259px;',
			height: 259,width: 484,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'35',
				},
				{
					text:'Наименование',
					width:'175',
				},
				{
					text:'Вид объекта',
					width:'120',
				},
				{
					text:'Описание события',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:500px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действия формы выбрать',
				},
			]
		},
	]
});