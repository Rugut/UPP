Ext.define('Справочники.ОснованияИсчисляемогоТрудовогоСтажа.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:423px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Основания исчисляемого трудового стажа',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:407px;height:220px;',
			height: 220,width: 407,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:423px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
			]
		},
	]
});