Ext.define('Справочники.ДокументыОбОбразовании.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:432px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документы об образовании',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:416px;height:259px;',
			height: 259,width: 416,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:432px;height:25px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'',
				},
			]
		},
	]
});