Ext.define('Документы.ИзменениеКадровогоПлана.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:620px;height:420px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменения кадрового плана',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:56px;width:604px;height:356px;',
			height: 356,width: 604,
			columns:
			[
				{
					text:' ',
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
					text:'Ответственный',
					width:'147',
				},
				{
					text:'Комментарий',
					width:'108',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:620px;height:25px;',
			items:
			[
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие5',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:32px;width:604px;height:19px;',
			height: 19,width: 604,
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