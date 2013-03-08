Ext.define('Документы.Событие.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 430,width: 618,
	iconCls: 'bogus',
	title: 'Документ',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:99px;top:33px;width:73px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:192px;top:33px;width:128px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:99px;top:354px;width:511px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:99px;top:378px;width:511px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидОбъекта',
			style: 'position:absolute;left:422px;top:33px;width:188px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СостояниеСобытия',
			style: 'position:absolute;left:422px;top:58px;width:188px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГруппаСобытия',
			style: 'position:absolute;left:99px;top:58px;width:221px;height:19px;',
		},
	]
});