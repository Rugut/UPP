Ext.define('Справочники.ВидыСтажа.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:421px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды стажа',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:405px;height:259px;',
			height: 259,width: 405,
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
			style: 'position:absolute;left:0px;top:0px;width:421px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Редактировать код номер',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				{
					text:'',
				},
			]
		},
	]
});