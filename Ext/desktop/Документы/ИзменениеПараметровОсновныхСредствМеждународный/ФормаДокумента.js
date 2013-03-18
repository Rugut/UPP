Ext.define('Документы.ИзменениеПараметровОсновныхСредствМеждународный.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:349px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:349px;width:548px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Ответственный:',
			style: 'position:absolute;left:336px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:422px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:100px;width:634px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:124px;width:634px;height:220px;',
			height: 220,width: 634,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Основное средство',
					width:'100',
				},
				{
					text:'Срок полезного использования',
					width:'100',
				},
				{
					text:'Срок полезного использования (новый)',
					width:'100',
				},
				{
					text:'Начислять амортизацию',
					width:'100',
				},
				{
					text:'Начислять амортизацию (новый)',
					width:'100',
				},
				{
					text:'Метод начисления амортизации',
					width:'100',
				},
				{
					text:'Метод начисления амортизации (новый)',
					width:'100',
				},
				{
					text:'Предполагаемый объем продукции',
					width:'97',
				},
				{
					text:'Предполагаемый объем продукции (новый)',
					width:'103',
				},
				{
					text:'Коэф.ускорения',
					width:'100',
				},
				{
					text:'Коэф. ускорения (новый)',
					width:'100',
				},
				{
					text:'Счет затрат',
					width:'100',
				},
				{
					text:'Счет затрат (новый)',
					width:'100',
				},
				{
					text:'Субконто 1',
					width:'100',
				},
				{
					text:'Субконто 1 (новое)',
					width:'100',
				},
				{
					text:'Субконто 2',
					width:'100',
				},
				{
					text:'Субконто 2 (новое)',
					width:'100',
				},
				{
					text:'Субконто 3',
					width:'100',
				},
				{
					text:'Субконто 3 (новое)',
					width:'100',
				},
				{
					text:'Состояние',
					width:'100',
				},
				{
					text:'Состояние (новое)',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:650px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
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
			style: 'position:absolute;left:0px;top:376px;width:650px;height:25px;',
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
	]
});