Ext.define('Документы.РасчетыПоСтраховымВзносам.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:799px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Расчеты по страховым взносам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:783px;height:356px;',
			height: 356,width: 783,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата документа',
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
					text:'Вид операции',
					width:'120',
				},
				{
					text:'Вид платежа/начисления',
					width:'120',
				},
				{
					text:'Дата платежа/начисления',
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
			style: 'position:absolute;left:0px;top:0px;width:799px;height:25px;',
			items:
			[
				{
					text:'',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие13',
				},
				'-',
				{
					text:'Действие7',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				'-',
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие12',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:783px;height:19px;',
			height: 19,width: 783,
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