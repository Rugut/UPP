Ext.define('Справочники.МедицинскиеСтраховыеПолисы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:901px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Медицинские страховые полисы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:885px;height:259px;',
			height: 259,width: 885,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Физлицо',
					width:'120',
				},
				{
					text:'Организация',
					width:'100',
				},
				{
					text:'Серия',
					width:'80',
				},
				{
					text:'Номер',
					width:'132',
				},
				{
					text:'Вид страхования',
					width:'100',
				},
				{
					text:'Дата окончания полиса',
					width:'80',
				},
				{
					text:'Программа страхования',
					width:'120',
				},
				{
					text:'Родственник',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:901px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие15',
				},
				{
					text:'',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие14',
				},
			]
		},
	]
});