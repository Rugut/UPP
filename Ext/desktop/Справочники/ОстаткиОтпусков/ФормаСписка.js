Ext.define('Справочники.ОстаткиОтпусков.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Остатки отпусков прошлых лет',
	
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
					width:'32',
				},
				{
					text:'Физлицо',
					width:'120',
				},
				{
					text:'Дата актуальности',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Обновить',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:176px;width:384px;height:116px;',
			height: 116,width: 384,
			columns:
			[
				{
					text:'Количество',
					width:'100',
				},
				{
					text:'Дата начала рабочего года',
					width:'100',
				},
				{
					text:'Дата окончания рабочего года',
					width:'100',
				},
			]
		},
	]
});