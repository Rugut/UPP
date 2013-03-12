Ext.define('Документы.Опрос.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Опросы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Опрашиваемое лицо',
					width:'120',
				},
				{
					text:'Типовая анкета',
					width:'120',
				},
				{
					text:'Обрабатывать автоматически',
					width:'80',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'',
				},
			]
		},
	]
});