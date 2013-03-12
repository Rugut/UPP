Ext.define('Справочники.ТерриториальныеУсловия.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:423px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Территориальные условия',
	
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
			style: 'position:absolute;left:0px;top:0px;width:423px;height:25px;',
			items:
			[
				{
					text:'Действие3',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
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
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие11',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
			]
		},
	]
});