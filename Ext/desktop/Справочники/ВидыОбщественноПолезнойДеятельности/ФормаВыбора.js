Ext.define('Справочники.ВидыОбщественноПолезнойДеятельности.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:425px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды общественно полезной деятельности',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:409px;height:280px;',
			height: 280,width: 409,
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
			style: 'position:absolute;left:0px;top:0px;width:425px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие формы выбрать',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
			]
		},
	]
});