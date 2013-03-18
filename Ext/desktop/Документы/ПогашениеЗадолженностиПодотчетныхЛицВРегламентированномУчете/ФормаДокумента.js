Ext.define('Документы.ПогашениеЗадолженностиПодотчетныхЛицВРегламентированномУчете.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:652px;height:396px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Погашение задолженности подотчетных лиц в регл. учете',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьМесяц',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:336px;top:33px;width:105px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:344px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:344px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:105px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:441px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'Очистить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:371px;width:652px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:636px;height:255px;',
			height: 255,width: 636,
			items:
			[
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:622px;height:24px;',
			items:
			[
				{
					text:'Заполнить долгами подотчетных лиц',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:27px;width:622px;height:202px;',
			height: 202,width: 622,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Работник',
					width:'90',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Результат',
					width:'100',
				},
				{
					text:'Расчетный документ',
					width:'100',
				},
				{
					text:'Валюта',
					width:'100',
				},
				{
					text:'Сумма в валюте',
					width:'100',
				},
				{
					text:'Курс',
					width:'100',
				},
				{
					text:'Кратность',
					width:'100',
				},
			]
		},
					]
				},
				{
					title:'Удержания',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:622px;height:211px;',
			height: 211,width: 622,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Работник',
					width:'90',
				},
				{
					text:'Подразделение',
					width:'100',
				},
				{
					text:'Результат',
					width:'100',
				},
				{
					text:'Расчетный документ',
					width:'100',
				},
				{
					text:'Валюта',
					width:'100',
				},
				{
					text:'Сумма в валюте',
					width:'100',
				},
				{
					text:'Курс',
					width:'100',
				},
				{
					text:'Кратность',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:622px;height:24px;',
			items:
			[
				{
					text:'Заполнить долгами подотчетных лиц',
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
			name: 'ПредставлениеПериодаРегистрации',
			style: 'position:absolute;left:441px;top:33px;width:203px;height:19px;',
		},
	]
});