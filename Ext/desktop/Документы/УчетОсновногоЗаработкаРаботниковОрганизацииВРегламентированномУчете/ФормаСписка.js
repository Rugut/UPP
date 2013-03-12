Ext.define('Документы.УчетОсновногоЗаработкаРаботниковОрганизацииВРегламентированномУчете.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:301px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Учет основного заработка сотрудников организации в регламентированном учете',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:984px;height:236px;',
			height: 236,width: 984,
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
					text:'Отражаемый документ',
					width:'120',
				},
				{
					text:'Сотрудники',
					width:'100',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:1000px;height:25px;',
			items:
			[
				{
					text:'Действие16',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие24',
				},
				'-',
				{
					text:'Действие27',
				},
				'-',
				'-',
				{
					text:'Действие15',
				},
				'-',
				{
					text:'Действие18',
				},
				{
					text:'Действие25',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Действие29',
				},
				{
					text:'Действие21',
				},
				{
					text:'Действие28',
				},
				'-',
				{
					text:'Действие20',
				},
				{
					text:'Действие23',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие16',
				},
				{
					text:'',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие19',
				},
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие19',
				},
				'-',
				'-',
				{
					text:'Действие22',
				},
				{
					text:'Действие20',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие18',
				},
				'-',
				'-',
				{
					text:'Действие17',
				},
				{
					text:'Действие15',
				},
				'-',
				{
					text:'Действие26',
				},
				{
					text:'Действие21',
				},
				'-',
				'-',
				{
					text:'',
				},
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