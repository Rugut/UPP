Ext.define('Справочники.ВидыОбщественноПолезнойДеятельности.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:416px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Виды общественно полезной деятельности',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:280px;',
			height: 280,width: 400,
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
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
				{
					text:'Действие8',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				'-',
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
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
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