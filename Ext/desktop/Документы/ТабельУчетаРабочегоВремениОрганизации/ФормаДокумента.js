Ext.define('Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:726px;height:550px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Табель учета рабочего времени',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:676px;height:25px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие6',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				{
					text:'Графики работы по видам времени',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Редактировать номер',
				},
				{
					text:'',
				},
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие',
				},
				'-',
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:525px;width:726px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:502px;height:482px;',
			height: 482,width: 502,
			items:
			[
				{
					title:'Основная Панель Документа',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:243px;top:0px;width:44px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:291px;top:0px;width:78px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:0px;top:1px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:85px;top:1px;width:144px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:0px;top:25px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:85px;top:25px;width:144px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:328px;top:25px;width:174px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:0px;top:463px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:87px;top:463px;width:415px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:210px;width:502px;height:245px;',
			height: 245,width: 502,
			items:
			[
				{
					title:'По дням',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:25px;width:502px;height:218px;',
			height: 218,width: 502,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Итого',
					width:'80',
				},
				{
					text:'1',
					width:'30',
				},
				{
					text:'2',
					width:'30',
				},
				{
					text:'3',
					width:'30',
				},
				{
					text:'4',
					width:'30',
				},
				{
					text:'5',
					width:'30',
				},
				{
					text:'6',
					width:'30',
				},
				{
					text:'7',
					width:'30',
				},
				{
					text:'8',
					width:'30',
				},
				{
					text:'9',
					width:'30',
				},
				{
					text:'10',
					width:'30',
				},
				{
					text:'11',
					width:'30',
				},
				{
					text:'12',
					width:'30',
				},
				{
					text:'13',
					width:'30',
				},
				{
					text:'14',
					width:'30',
				},
				{
					text:'15',
					width:'30',
				},
				{
					text:'16',
					width:'30',
				},
				{
					text:'17',
					width:'30',
				},
				{
					text:'18',
					width:'30',
				},
				{
					text:'19',
					width:'30',
				},
				{
					text:'20',
					width:'30',
				},
				{
					text:'21',
					width:'30',
				},
				{
					text:'22',
					width:'30',
				},
				{
					text:'23',
					width:'30',
				},
				{
					text:'24',
					width:'30',
				},
				{
					text:'25',
					width:'30',
				},
				{
					text:'26',
					width:'30',
				},
				{
					text:'27',
					width:'30',
				},
				{
					text:'28',
					width:'30',
				},
				{
					text:'29',
					width:'30',
				},
				{
					text:'30',
					width:'30',
				},
				{
					text:'31',
					width:'30',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:502px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие5',
				},
				'-',
				{
					text:'Подбор',
				},
				{
					text:'Добавить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'По всем сотрудникам',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'По списку сотрудников',
				},
			]
		},
					]
				},
				{
					title:'В целом за период',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:502px;height:219px;',
			height: 219,width: 502,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'68',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Вид времени',
					width:'100',
				},
				{
					text:'Дней',
					width:'50',
				},
				{
					text:'Часов',
					width:'50',
				},
				{
					text:'Вид времени',
					width:'100',
				},
				{
					text:'Дней',
					width:'50',
				},
				{
					text:'Часов',
					width:'50',
				},
				{
					text:'Вид времени',
					width:'100',
				},
				{
					text:'Дней',
					width:'50',
				},
				{
					text:'Часов',
					width:'50',
				},
				{
					text:'Вид времени',
					width:'100',
				},
				{
					text:'Дней',
					width:'50',
				},
				{
					text:'Часов',
					width:'50',
				},
				{
					text:'Вид времени',
					width:'100',
				},
				{
					text:'Дней',
					width:'50',
				},
				{
					text:'Часов',
					width:'50',
				},
				{
					text:'Вид времени',
					width:'100',
				},
				{
					text:'Дней',
					width:'50',
				},
				{
					text:'Часов',
					width:'50',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:300px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Добавить',
				},
				'-',
				{
					text:'По всем сотрудникам',
				},
				'-',
				{
					text:'Подбор',
				},
				{
					text:'Действие',
				},
				{
					text:'По списку сотрудников',
				},
				'-',
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:316px;top:0px;width:186px;height:24px;',
			items:
			[
				{
					text:'Изменить состав колонок',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:396px;top:0px;width:106px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:60px;width:502px;height:128px;',
			height: 128,width: 502,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:46px;top:8px;width:183px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаПериода',
			style: 'position:absolute;left:46px;top:98px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияПериода',
			style: 'position:absolute;left:149px;top:98px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'по:',
			style: 'position:absolute;left:130px;top:98px;width:15px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:516px;top:33px;width:202px;height:482px;',
			height: 482,width: 202,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьЗакрытьСправкуФормы',
			text: 'Скрыть эту информацию о Табеле',
			style: 'position:absolute;left:0px;top:445px;width:200px;height:35px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:676px;top:0px;width:50px;height:25px;',
			items:
			[
				{
					text:'Переключение справки формы',
				},
			]
		},
	]
});