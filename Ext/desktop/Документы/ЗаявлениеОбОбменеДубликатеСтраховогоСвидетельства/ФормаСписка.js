Ext.define('Документы.ЗаявлениеОбОбменеДубликатеСтраховогоСвидетельства.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Заявление об обмене, выдаче дубликата страхового свидетельства (АДВ-2, АДВ-3)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:984px;height:196px;',
			height: 196,width: 984,
			columns:
			[
				{
					text:'',
					width:'28',
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
					width:'180',
				},
				{
					text:'Вид АДВ',
					width:'80',
				},
				{
					text:'Сотрудники',
					width:'101',
				},
				{
					text:'Ответственный',
					width:'180',
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
					text:'Действие22',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие14',
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'Действие19',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие21',
				},
				'-',
				'-',
				{
					text:'Действие12',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие20',
				},
				{
					text:'',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие18',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие12',
				},
				{
					text:'',
				},
				'-',
				'-',
				'-',
				{
					text:'Действие15',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие13',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:984px;height:19px;',
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