Ext.define('Документы.ПередачаСЗВ4вПФР.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Описи сведений АДВ-6-2 (до 2010 года - Ведомости уплаты АДВ-11)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:984px;height:356px;',
			height: 356,width: 984,
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
					width:'121',
				},
				{
					text:'Отчетный период',
					width:'99',
				},
				{
					text:'Сотрудники',
					width:'100',
				},
				{
					text:'Загружен',
					width:'70',
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
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
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
					text:'Действие10',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Печать',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие10',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие12',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие11',
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'',
				},
				{
					text:'Действие7',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:984px;height:19px;',
			height: 19,width: 984,
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