Ext.define('Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 480,width: 350,
	iconCls: 'bogus',
	title: 'Договор на выполнение работ с физ. лицом',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:102px;top:129px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:256px;top:307px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаЗаРаботу',
			style: 'position:absolute;left:102px;top:307px;width:99px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:102px;top:428px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:102px;top:403px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:102px;top:235px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:236px;top:235px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:102px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:202px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:102px;top:81px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:102px;top:105px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета',
			style: 'position:absolute;left:102px;top:259px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ХарактерОплаты',
			style: 'position:absolute;left:102px;top:283px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КодВычета',
			style: 'position:absolute;left:102px;top:379px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОписаниеОтраженияВУчета',
			style: 'position:absolute;left:102px;top:355px;width:240px;height:19px;',
		},
	]
});