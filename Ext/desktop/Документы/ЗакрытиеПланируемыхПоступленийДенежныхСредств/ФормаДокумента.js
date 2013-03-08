Ext.define('Документы.ЗакрытиеПланируемыхПоступленийДенежныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 427,width: 672,
	iconCls: 'bogus',
	title: 'Закрытие планируемых поступлений денежных средств',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:351px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:444px;top:78px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:98px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтветственныйПоступление',
			style: 'position:absolute;left:444px;top:102px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Состояние',
			style: 'position:absolute;left:444px;top:351px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода3',
			style: 'position:absolute;left:98px;top:375px;width:566px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборДатаНач',
			style: 'position:absolute;left:98px;top:78px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтборДатаКон',
			style: 'position:absolute;left:207px;top:78px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНастройкаПериода',
			text: '...',
			style: 'position:absolute;left:298px;top:78px;width:20px;height:19px;',
		},
	]
});