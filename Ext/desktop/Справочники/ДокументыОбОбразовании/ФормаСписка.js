Ext.define('Справочники.ДокументыОбОбразовании.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:415px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документы об образовании',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:399px;height:259px;',
			height: 259,width: 399,
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
					width:'350',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:415px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие9',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				'-',
				'-',
			]
		},
	]
});