Ext.define('Справочники.РазделыАнкеты.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Разделы анкеты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:259px;',
			height: 259,width: 384,
			columns:
			[
				{
					text:'',
					width:'20',
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
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие11',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие2',
				},
				{
					text:'Редактировать код номер',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие формы выбрать',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие8',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие3',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие4',
				},
			]
		},
	]
});