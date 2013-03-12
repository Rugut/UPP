Ext.define('Справочники.ОстаткиОтпусковОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Остатки отпусков сотрудников',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:116px;',
			height: 116,width: 384,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Сотрудник',
					width:'120',
				},
				{
					text:'Дата актуальности',
					width:'80',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие4',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Обновить',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Удалить',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:176px;width:384px;height:116px;',
			height: 116,width: 384,
			columns:
			[
				{
					text:'Вид ежегодного отпуска',
					width:'100',
				},
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Дата начала рабочего года',
					width:'80',
				},
				{
					text:'Дата окончания рабочего года',
					width:'80',
				},
			]
		},
	]
});