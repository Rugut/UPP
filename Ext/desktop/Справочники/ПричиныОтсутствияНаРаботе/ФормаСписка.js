Ext.define('Справочники.ПричиныОтсутствияНаРаботе.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:405px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Причины отсутствия на работе',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:389px;height:259px;',
			height: 259,width: 389,
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
			style: 'position:absolute;left:0px;top:0px;width:405px;height:25px;',
			items:
			[
				{
					text:'Действие13',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Действие19',
				},
				{
					text:'Действие3',
				},
				{
					text:'Редактировать код',
				},
				{
					text:'Действие18',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие11',
				},
				'-',
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
			]
		},
	]
});