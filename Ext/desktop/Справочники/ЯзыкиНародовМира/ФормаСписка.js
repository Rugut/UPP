Ext.define('Справочники.ЯзыкиНародовМира.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:523px;height:260px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Языки народов мира',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:507px;height:220px;',
			height: 220,width: 507,
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
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:523px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие10',
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
					text:'Действие1',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				{
					text:'Подбор из ОКИН',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
			]
		},
	]
});