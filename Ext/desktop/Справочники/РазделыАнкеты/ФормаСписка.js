Ext.define('Справочники.РазделыАнкеты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:453px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Разделы анкеты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:437px;height:259px;',
			height: 259,width: 437,
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
			style: 'position:absolute;left:0px;top:0px;width:453px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие6',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие6',
				},
				{
					text:'Редактировать код номер',
				},
				{
					text:'Действие',
				},
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
					text:'Действие8',
				},
				{
					text:'Действие8',
				},
			]
		},
	]
});