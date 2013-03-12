Ext.define('Документы.СписаниеДепонентовВДоходыОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:1000px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Списание депонентов в доходы организаций',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:984px;height:235px;',
			height: 235,width: 984,
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
					width:'101',
				},
				{
					text:'Сумма',
					width:'80',
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
					text:'Действие26',
				},
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие19',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				{
					text:'Действие21',
				},
				{
					text:'Действие18',
				},
				{
					text:'Действие24',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие22',
				},
				'-',
				{
					text:'Действие11',
				},
				'-',
				{
					text:'Действие23',
				},
				{
					text:'Действие18',
				},
				{
					text:'Действие17',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие15',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
				'-',
				'-',
				{
					text:'Действие29',
				},
				{
					text:'Действие28',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Действие21',
				},
				{
					text:'Действие14',
				},
				{
					text:'Действие27',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие20',
				},
				{
					text:'Действие19',
				},
				{
					text:'Действие20',
				},
				'-',
				{
					text:'Действие17',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие25',
				},
				'-',
				{
					text:'Действие15',
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