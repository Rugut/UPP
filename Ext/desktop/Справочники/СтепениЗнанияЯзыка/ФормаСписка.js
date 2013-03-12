Ext.define('Справочники.СтепениЗнанияЯзыка.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:524px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Степени знания языков',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:508px;height:220px;',
			height: 220,width: 508,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'320',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:524px;height:25px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие11',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие4',
				},
				{
					text:'Подбор из ОКИН',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
			]
		},
	]
});