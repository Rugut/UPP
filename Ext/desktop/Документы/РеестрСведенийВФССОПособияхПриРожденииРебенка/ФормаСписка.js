Ext.define('Документы.РеестрСведенийВФССОПособияхПриРожденииРебенка.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:800px;height:500px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Реестры сведений в ФСС о пособиях при рождении ребенка',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:56px;width:784px;height:436px;',
			height: 436,width: 784,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Сотрудники',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:800px;height:25px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие3',
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
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				'-',
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие3',
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
					text:'Действие6',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие12',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:784px;height:19px;',
			height: 19,width: 784,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:0px;width:220px;height:19px;',
		},
					]
				},
			]
		},
	]
});